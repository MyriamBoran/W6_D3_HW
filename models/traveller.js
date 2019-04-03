const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function() {
  return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function(transport) {
  return this.journeys.filter(journey => {
    if (journey.transport === transport) return journey;
  });
};

Traveller.prototype.getJourneysByMinDistance = function(minDistance) {
  return this.journeys.filter(journey => {
    if (journey.distance > minDistance) return journey;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function() {
  return this.journeys.reduce((accumulator, journey) => {
    return accumulator + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function() {
  let transports = this.journeys.map(journey => journey.transport);
  return transports.filter((transport, index) => {
    if (transports.indexOf(transport) === index) return transport;
  });
};

module.exports = Traveller;
