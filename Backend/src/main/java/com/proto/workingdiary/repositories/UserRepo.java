package com.proto.workingdiary.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.security.core.userdetails.User;

public interface UserRepo extends MongoRepository<User, String>{

}
