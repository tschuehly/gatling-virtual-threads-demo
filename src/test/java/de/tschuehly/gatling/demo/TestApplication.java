package de.tschuehly.gatling.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.context.TestConfiguration;

@TestConfiguration(proxyBeanMethods = false)
public class TestApplication {
  public static void main(String[] args) {
    SpringApplication.from(GatlingDemoApplication::main)
        .with(TestApplication.class).run(args);
  }
}
