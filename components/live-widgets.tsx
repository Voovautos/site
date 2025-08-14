'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Cloud, Activity } from 'lucide-react';

interface WeatherAlert {
  event: string;
  headline: string;
  areas: { name: string }[];
  severity: string;
  urgency: string;
  effective: string;
  expires: string;
}

interface SeismicEvent {
  properties: {
    mag: number;
    place: string;
    time: number;
    sig: number;
  };
  geometry: {
    coordinates: [number, number, number];
  };
}

export function LiveWeatherWidget() {
  const [alerts, setAlerts] = useState<WeatherAlert[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWeatherAlerts = async () => {
      try {
        // Mock data for demo - in production, would fetch from NWS API
        const mockAlerts: WeatherAlert[] = [
          {
            event: "Severe Thunderstorm Warning",
            headline: "Severe thunderstorm warning for Harris County, TX",
            areas: [{ name: "Harris County, TX" }],
            severity: "Severe",
            urgency: "Immediate",
            effective: new Date().toISOString(),
            expires: new Date(Date.now() + 3600000).toISOString()
          },
          {
            event: "Flash Flood Watch",
            headline: "Flash flood watch for Miami-Dade County, FL",
            areas: [{ name: "Miami-Dade County, FL" }],
            severity: "Moderate",
            urgency: "Future",
            effective: new Date().toISOString(),
            expires: new Date(Date.now() + 7200000).toISOString()
          }
        ];
        
        setAlerts(mockAlerts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather alerts:', error);
        setLoading(false);
      }
    };

    fetchWeatherAlerts();
    const interval = setInterval(fetchWeatherAlerts, 300000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'extreme': return 'bg-red-500';
      case 'severe': return 'bg-orange-500';
      case 'moderate': return 'bg-yellow-500';
      default: return 'bg-blue-500';
    }
  };

  return (
    <Card className="weather-widget text-white">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg">
          <AlertTriangle className="mr-2 h-5 w-5" />
          Live Weather Alerts
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-sm opacity-90">Loading alerts...</div>
        ) : alerts.length > 0 ? (
          <div className="space-y-3">
            {alerts.slice(0, 3).map((alert, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-3">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-semibold">{alert.event}</h4>
                  <Badge className={`${getSeverityColor(alert.severity)} text-white border-0`}>
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-xs opacity-90 mb-2">{alert.headline}</p>
                <div className="text-xs opacity-75">
                  {alert.areas.map(area => area.name).join(', ')}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm opacity-90">No active alerts</div>
        )}
        <div className="text-xs opacity-75 mt-3">
          Last updated: {new Date().toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  );
}

export function LiveSeismicWidget() {
  const [events, setEvents] = useState<SeismicEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeismicData = async () => {
      try {
        // Mock data for demo - in production, would fetch from USGS API
        const mockEvents: SeismicEvent[] = [
          {
            properties: {
              mag: 4.2,
              place: "32 km SW of Bakersfield, CA",
              time: Date.now() - 1800000,
              sig: 289
            },
            geometry: {
              coordinates: [-119.2, 35.2, 8.5]
            }
          },
          {
            properties: {
              mag: 3.8,
              place: "18 km E of Mammoth Lakes, CA",
              time: Date.now() - 3600000,
              sig: 234
            },
            geometry: {
              coordinates: [-118.8, 37.6, 2.1]
            }
          }
        ];
        
        setEvents(mockEvents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching seismic data:', error);
        setLoading(false);
      }
    };

    fetchSeismicData();
    const interval = setInterval(fetchSeismicData, 300000); // Update every 5 minutes

    return () => clearInterval(interval);
  }, []);

  const getMagnitudeColor = (magnitude: number) => {
    if (magnitude >= 5.0) return 'bg-red-500';
    if (magnitude >= 4.0) return 'bg-orange-500';
    if (magnitude >= 3.0) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <Card className="seismic-widget text-white">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center text-lg">
          <Activity className="mr-2 h-5 w-5" />
          Live Seismic Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="text-sm opacity-90">Loading seismic data...</div>
        ) : events.length > 0 ? (
          <div className="space-y-3">
            {events.slice(0, 3).map((event, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-3">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm font-semibold">
                    Magnitude {event.properties.mag.toFixed(1)}
                  </h4>
                  <Badge className={`${getMagnitudeColor(event.properties.mag)} text-white border-0`}>
                    M {event.properties.mag.toFixed(1)}
                  </Badge>
                </div>
                <p className="text-xs opacity-90 mb-2">{event.properties.place}</p>
                <div className="text-xs opacity-75">
                  {new Date(event.properties.time).toLocaleString()}
                </div>
                <div className="text-xs opacity-75">
                  Depth: {event.geometry.coordinates[2]} km
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-sm opacity-90">No recent events</div>
        )}
        <div className="text-xs opacity-75 mt-3">
          Data source: USGS
        </div>
      </CardContent>
    </Card>
  );
}

export function LiveStatsWidget() {
  const [stats, setStats] = useState({
    activeJobs: 0,
    registeredContractors: 0,
    insuranceCompanies: 0,
    adjustors: 0,
    successfulConnections: 0
  });

  useEffect(() => {
    const updateStats = () => {
      // Simulate real-time data updates
      setStats({
        activeJobs: Math.floor(Math.random() * 50) + 1250,
        registeredContractors: Math.floor(Math.random() * 100) + 2800,
        insuranceCompanies: Math.floor(Math.random() * 10) + 185,
        adjustors: Math.floor(Math.random() * 20) + 475,
        successfulConnections: Math.floor(Math.random() * 200) + 5800
      });
    };

    updateStats();
    const interval = setInterval(updateStats, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      <div className="bg-blue-600 rounded-lg p-4 text-center text-white">
        <div className="text-2xl font-bold">{stats.activeJobs.toLocaleString()}</div>
        <div className="text-sm opacity-90">Active Jobs</div>
      </div>
      <div className="bg-green-600 rounded-lg p-4 text-center text-white">
        <div className="text-2xl font-bold">{stats.registeredContractors.toLocaleString()}</div>
        <div className="text-sm opacity-90">Contractors</div>
      </div>
      <div className="bg-purple-600 rounded-lg p-4 text-center text-white">
        <div className="text-2xl font-bold">{stats.insuranceCompanies}</div>
        <div className="text-sm opacity-90">Insurance Co.</div>
      </div>
      <div className="bg-orange-600 rounded-lg p-4 text-center text-white">
        <div className="text-2xl font-bold">{stats.adjustors}</div>
        <div className="text-sm opacity-90">Adjustors</div>
      </div>
      <div className="bg-red-600 rounded-lg p-4 text-center text-white">
        <div className="text-2xl font-bold">{stats.successfulConnections.toLocaleString()}</div>
        <div className="text-sm opacity-90">Connections</div>
      </div>
    </div>
  );
}
