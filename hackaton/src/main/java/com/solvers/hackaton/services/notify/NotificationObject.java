package com.solvers.hackaton.services.notify;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIgnoreType;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class NotificationObject {

    private String chat_id;
    private String text;
}
