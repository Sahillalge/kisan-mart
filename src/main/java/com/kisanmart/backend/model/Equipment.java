package com.kisanmart.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "equipment")
public class Equipment {

    @Id
    private String id;
    private String name;
    private String category;
    private String type;
    private String district;
    private Double pricePerDay;
    private Double salePrice;
    private Double emi;
    private boolean available;
    private Double rating;
    private Integer reviews;
    private boolean isNew;

    public String getId() { return id; }
    public String getName() { return name; }
    public String getCategory() { return category; }
    public String getType() { return type; }
    public String getDistrict() { return district; }
    public Double getPricePerDay() { return pricePerDay; }
    public Double getSalePrice() { return salePrice; }
    public Double getEmi() { return emi; }
    public boolean isAvailable() { return available; }
    public Double getRating() { return rating; }
    public Integer getReviews() { return reviews; }
    public boolean isNew() { return isNew; }

    public void setId(String id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setCategory(String category) { this.category = category; }
    public void setType(String type) { this.type = type; }
    public void setDistrict(String district) { this.district = district; }
    public void setPricePerDay(Double pricePerDay) { this.pricePerDay = pricePerDay; }
    public void setSalePrice(Double salePrice) { this.salePrice = salePrice; }
    public void setEmi(Double emi) { this.emi = emi; }
    public void setAvailable(boolean available) { this.available = available; }
    public void setRating(Double rating) { this.rating = rating; }
    public void setReviews(Integer reviews) { this.reviews = reviews; }
    public void setNew(boolean isNew) { this.isNew = isNew; }
}