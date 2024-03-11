package com.Humalaft.serviceactor.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ContactInfo {

    private String name;
    private String position;
    private String email;
    private Long phone;
}
