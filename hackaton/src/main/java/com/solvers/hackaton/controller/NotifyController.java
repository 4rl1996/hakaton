package com.solvers.hackaton.controller;

import com.solvers.hackaton.services.notify.NotificationFromClient;
import com.solvers.hackaton.services.notify.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/notification")
@RequiredArgsConstructor
public class NotifyController {

    private final NotificationService notificationService;

    @PostMapping()
    void sendNotification(@RequestBody NotificationFromClient notification) {
        notificationService.sendMessage(notification.getText());
    }
}
