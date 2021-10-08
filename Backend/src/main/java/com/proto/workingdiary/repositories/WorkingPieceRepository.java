package com.proto.workingdiary.repositories;

import com.proto.workingdiary.models.WorkingPiece;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Set;

public interface  WorkingPieceRepository extends MongoRepository<WorkingPiece,String> {

    List<WorkingPiece> findByHeader(String header);
    List<WorkingPiece> findByContext(String context);
    List<WorkingPiece> findByDate(String date);
    Set<WorkingPiece> findByBelongerId(String id);
}
