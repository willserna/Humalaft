package com.Humalaft.serviceactor.controllers;

import com.Humalaft.serviceactor.models.Actor;
import com.Humalaft.serviceactor.models.DocumentoAdjunto;
import com.Humalaft.serviceactor.services.ActorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class ActorController {
    @Autowired
    private ActorService actorService;
    @GetMapping("/")
    public List<Actor> getAll(){
        return actorService.getAll();
    }
    @PostMapping("/")
    public Actor save(@RequestBody Actor actor){
      return  actorService.save(actor);
    }
}
