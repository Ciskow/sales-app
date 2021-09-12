package com.ciskow.salesapp.repositories;

import com.ciskow.salesapp.entities.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SellerRepository extends JpaRepository<Seller, Long> {
}
