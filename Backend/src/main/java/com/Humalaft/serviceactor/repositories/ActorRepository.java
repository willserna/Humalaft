package com.Humalaft.serviceactor.repositories;

import com.Humalaft.serviceactor.models.Actor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ActorRepository extends MongoRepository<Actor,Long> {
}
