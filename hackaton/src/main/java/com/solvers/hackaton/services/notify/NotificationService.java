package com.solvers.hackaton.services.notify;

import com.solvers.hackaton.feign.NotifyFeignClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class NotificationService {

    @Value("${notification.botUrl:}")
    private String apiUrl;

    @Value("${notification.chatId:}")
    private String chatId;

    private final NotifyFeignClient notifyFeignClient;

    public void sendMessage(String text) {
        NotificationObject notificationObject = NotificationObject.builder()
                .chat_id(chatId)
                .text(text)
                .build();
        notifyFeignClient.sendNotification(notificationObject);
    }
}
