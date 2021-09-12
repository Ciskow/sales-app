package com.ciskow.salesapp.repositories;

import com.ciskow.salesapp.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale, Long> {
}
