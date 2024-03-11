package com.Humalaft.serviceactor.services;

import com.Humalaft.serviceactor.models.Actor;

import java.util.List;

public interface ActorService {

    List<Actor> getAll();

    Actor save(Actor actor);
}
