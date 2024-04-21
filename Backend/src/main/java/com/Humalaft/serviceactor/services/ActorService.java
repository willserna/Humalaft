package com.Humalaft.serviceactor.services;

import com.Humalaft.serviceactor.models.Actor;
import com.Humalaft.serviceactor.models.EntityInfo;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface ActorService {

    List<Actor> getAll();

    Actor save(Actor actor);

    List<EntityInfo> getAllEntityInfos();
}
