package com.kisanmart.backend.controller;

import com.kisanmart.backend.model.Equipment;
import com.kisanmart.backend.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/equipment")
@CrossOrigin(origins = "http://localhost:3000")
public class EquipmentController {

    @Autowired
    private EquipmentRepository repo;

    @GetMapping
    public List<Equipment> getAll() { return repo.findAll(); }

    @GetMapping("/rent")
    public List<Equipment> getRentals() {
        return repo.findByTypeIn(List.of("rent", "both"));
    }

    @GetMapping("/buy")
    public List<Equipment> getForSale() {
        return repo.findByTypeIn(List.of("sale", "both"));
    }

    @GetMapping("/{id}")
    public Equipment getById(@PathVariable String id) {
        return repo.findById(id).orElse(null);
    }

    @PostMapping
    public Equipment create(@RequestBody Equipment eq) {
        return repo.save(eq);
    }
}