package com.kisanmart.backend.repository;

import com.kisanmart.backend.model.Equipment;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface EquipmentRepository extends MongoRepository<Equipment, String> {
    List<Equipment> findByTypeIn(List<String> types);
    List<Equipment> findByCategory(String category);
    List<Equipment> findByDistrict(String district);
}
