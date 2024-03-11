package com.Humalaft.serviceactor.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DocumentoAdjunto {
    private String nombre;
    private byte[] contenido;
}
