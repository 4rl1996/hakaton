package com.solvers.hackaton.feign;

import com.solvers.hackaton.services.notify.NotificationObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Service
@FeignClient(name = "notify-feign-client",
url = "${notification.botUrl:}")
public interface NotifyFeignClient {

    @PostMapping()
    void sendNotification(@RequestBody NotificationObject notificationObject);
}
