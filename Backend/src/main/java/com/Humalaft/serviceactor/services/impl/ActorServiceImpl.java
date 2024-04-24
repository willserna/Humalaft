package com.Humalaft.serviceactor.services.impl;

import com.Humalaft.serviceactor.models.Actor;
import com.Humalaft.serviceactor.models.EntityInfo;
import com.Humalaft.serviceactor.repositories.ActorRepository;
import com.Humalaft.serviceactor.services.ActorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActorServiceImpl implements ActorService {

    @Autowired
    private ActorRepository actorRepository;
    @Override
    public List<Actor> getAll() {
        return actorRepository.findAll();
    }

    @Override
    public Actor save(Actor actor) {

        return actorRepository.save(actor);
    }

    public List<EntityInfo> getAllEntityInfos() {
        List<Actor> actors = actorRepository.findAllBasicInfo();
        return actors.stream()
                .map(actor -> actor.getBasicInfo().getEntity())
                .collect(Collectors.toList());
    }
}
