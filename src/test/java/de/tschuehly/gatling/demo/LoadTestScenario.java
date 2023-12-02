package de.tschuehly.gatling.demo;

import io.gatling.javaapi.core.ChainBuilder;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpProtocolBuilder;

import java.time.Duration;
import java.util.Collections;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ThreadLocalRandom;
import java.util.function.Supplier;
import java.util.stream.Stream;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

public class LoadTestScenario extends Simulation {

  final HttpProtocolBuilder httpProtocol = http
      .baseUrl("http://localhost:8080")
      .acceptHeader("application/json")
      .userAgentHeader("Gatling performance Test");

  ScenarioBuilder sampleScenario = scenario("Load Test greeting")
      .exec(http("wait for")
          .get(session -> "/wait/" + 1)
          .check(status().is(200))
      );

  public LoadTestScenario() {
    this.setUp(sampleScenario.injectOpen(
        atOnceUsers(1000)
        ))
        .assertions(forAll().failedRequests().percent().lte(1D))
        .protocols(httpProtocol);
  }


}
