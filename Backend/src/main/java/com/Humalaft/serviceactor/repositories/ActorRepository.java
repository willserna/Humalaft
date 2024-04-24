package com.Humalaft.serviceactor.repositories;

import com.Humalaft.serviceactor.models.Actor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ActorRepository extends MongoRepository<Actor,Long> {
    @Query(value="{}", fields="{ 'basic_info' : 1 }")
    List<Actor> findAllBasicInfo();
}
