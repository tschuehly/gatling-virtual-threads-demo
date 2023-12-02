package de.tschuehly.gatling.demo;

import java.util.concurrent.TimeUnit;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
public class DemoController {

  private final RestClient restClient = RestClient.create();

  @GetMapping("/wait/{seconds}")
  public void waitFor(@PathVariable String seconds){
    restClient.get()
        .uri("http://localhost:8081/block/"+seconds)
        .retrieve()
        .toBodilessEntity();
  }
  @GetMapping("/block/{seconds}")
  public void block(@PathVariable String seconds) throws InterruptedException {
    TimeUnit.SECONDS.sleep(Long.parseLong(seconds));
  }
}
