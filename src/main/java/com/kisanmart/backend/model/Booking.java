package com.kisanmart.backend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String equipmentId;
    private LocalDate startDate;
    private LocalDate endDate;
    private Double totalAmount;
    private String status = "pending";

    public Long getId() { return id; }
    public Long getUserId() { return userId; }
    public String getEquipmentId() { return equipmentId; }
    public LocalDate getStartDate() { return startDate; }
    public LocalDate getEndDate() { return endDate; }
    public Double getTotalAmount() { return totalAmount; }
    public String getStatus() { return status; }

    public void setId(Long id) { this.id = id; }
    public void setUserId(Long userId) { this.userId = userId; }
    public void setEquipmentId(String equipmentId) { this.equipmentId = equipmentId; }
    public void setStartDate(LocalDate startDate) { this.startDate = startDate; }
    public void setEndDate(LocalDate endDate) { this.endDate = endDate; }
    public void setTotalAmount(Double totalAmount) { this.totalAmount = totalAmount; }
    public void setStatus(String status) { this.status = status; }
}