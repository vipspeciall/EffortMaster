package com.proto.workingdiary.models;

public class AuthenticationResponse {
    private final String jwt;
    public AuthenticationResponse(String jwt){
        this.jwt = jwt;
    }
    public String getJwl(){
        return jwt;
    }
}
