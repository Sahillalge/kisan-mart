package com.kisanmart.backend.controller;

import com.kisanmart.backend.model.Booking;
import com.kisanmart.backend.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private BookingRepository repo;

    @PostMapping
    public Booking create(@RequestBody Booking booking) {
        return repo.save(booking);
    }

    @GetMapping("/user/{userId}")
    public List<Booking> getByUser(@PathVariable Long userId) {
        return repo.findByUserId(userId);
    }
}