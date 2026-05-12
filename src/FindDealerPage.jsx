import { useState } from "react";
import axios from "axios";

const dealers = [
    {
        name: "Word of Mouth Floors",
        address: "11240 Bridgeport Rd Unit 6",
        city: "Richmond",
        postalCode: "V6X 1T2",
        phone: "888-966-3579",
        website: "https://www.wordofmouthfloors.com/",
        lat: 49.19188043829143,
        lng: -123.09940278760394,
    },
    {
        name: "Tile World Building Materials Ltd.",
        address: "11080 Bridgeport Rd Unit 100, Richmond, BC V6X 1T2",
        city: "Richmond",
        postalCode: "V6X 1T2",
        phone: "604-370-1616",
        website: "http://www.tileworld.ca/",
        lat: 49.191913738182905,
        lng: -123.10184934713139,
    },
    {
        name: "End Of The Roll Flooring Centres - Richmond",
        address: "12591 Bridgeport Rd, Richmond, BC V6V 1J4",
        city: "Richmond",
        postalCode: "V6V 1J4",
        phone: "604-270-1955",
        website: "https://endoftheroll.com/?location=richmond",
        lat: 49.19285180731477,
        lng: -123.08311790761095,
    },
    {
        name: "Save On Floors Ltd",
        address: "8173 128 St Unit # 108, Surrey, BC V3W 4G1",
        city: "Surrey",
        postalCode: "V3W 4G1",
        phone: "604-596-2112",
        website: "http://www.saveonfloors.ca/",
        lat: 49.15200523370366,
        lng: -122.86834584343325,
    },
    {
        name: "Best Flooring Company",
        address: "8299 129 St unit 102, Surrey, BC V3W 0A6",
        city: "Surrey",
        postalCode: "V3W 0A6",
        phone: "604-356-7159",
        website: "https://bestflooring.co/",
        lat: 49.15340839862796,
        lng: -122.86579265333849,
    },
    {
        name: "Val-U Flooring Ltd.",
        address: "7883 Edmonds St, Burnaby, BC V3N 3L2",
        city: "Burnaby",
        postalCode: "V3N 3L2",
        phone: "604-521-7745",
        website: "http://www.valueflooring.ca/",
        lat: 49.22637662581478,
        lng: -122.93765334527946,
    },
    {
        name: "Queen of Floors - Kelowna Flooring & Countertops",
        address: "2495 Enterprise Way Suite 104, Kelowna, BC V1X 6X2",
        city: "Kelowna",
        postalCode: "V1X 6X2",
        phone: "236-795-5160",
        website: "https://www.thekqoffloors.ca/?utm_source=iNFOTEL+Multedia&utm_medium=website+&utm_id=10076243",
        lat: 49.886352424717664,
        lng: -119.43103744524507,
    },
    {
        name: "Queen of Floors - Kelowna Flooring & Countertops",
        address: "2495 Enterprise Way Suite 104, Kelowna, BC V1X 6X2",
        city: "Kelowna",
        postalCode: "V1X 6X2",
        phone: "236-795-5160",
        website: "https://www.thekqoffloors.ca/?utm_source=iNFOTEL+Multedia&utm_medium=website+&utm_id=10076243",
        lat: 49.886352424717664,
        lng: -119.43103744524507,
    },
    {
        name: "Star Interiors Ltd",
        address: "1108 55 Ave NE, Calgary, AB T2E 6Y4",
        city: "Calgary",
        postalCode: "T2E 6Y4",
        phone: "236-332-5511",
        website: "Coming Soon!",
        lat: 51.10257374763138,
        lng: -114.03930037401669,
    },
    {
        name: "Lions Group",
        address: "12103 121 Ave NW, Edmonton, AB T5L 0C7",
        city: "Edmonton",
        postalCode: "T5L 0C7",
        phone: "780-893-6340",
        website: "https://lions-group.ca/",
        lat: 53.57515023362379,
        lng: -113.53121035853955,
    },
    {
        name: "Onix Flooring, flooring Store Victoria",
        address: "816 Cloverdale Ave #3, Victoria, BC V8X 2S8",
        city: "Victoria",
        postalCode: "V8X 2S8",
        phone: "250-222-2226",
        website: "https://www.onixflooring.ca/",
        lat: 48.45105632552493,
        lng: -123.37044104134789,
    },
    {
        name: "PI FLOOR & BLINDS",
        address: "4500 W Saanich Rd #100, Saanich Core, BC V8Z 3G2",
        city: "Saanich Core",
        postalCode: "V8Z 3G2",
        phone: "250-590-0030",
        website: "https://pifloor.ca/",
        lat: 48.49412523453412,
        lng: -123.38896092883573,
    },
    {
        name: "DK Floors & Tiles",
        address: "13395 76 Ave #301, Surrey, BC V3W 6K2",
        city: "Surrey",
        postalCode: "V3W 6K2",
        phone: "778-558-0172",
        website: "http://dkfloors.ca/",
        lat: 49.141352940485085,
        lng: -122.85232897411959,
    },
    {
        name: "Detail Flooring",
        address: "8342 130 St unit 401, Surrey, BC V3W 8J9",
        city: "Surrey",
        postalCode: "V3W 8J9",
        phone: "778-960-5857",
        website: "http://www.detailfloor.ca/",
        lat: 49.15410609518945,
        lng: -122.86003249134272,
    },
    {
        name: "Absolutely Floored",
        address: "3160 Westwood St #5, Port Coquitlam, BC V3C 3L7",
        city: "Port Coquitlam",
        postalCode: "V3C 3L7",
        phone: "+16049416677",
        website: "https://www.abfloored.com/",
        lat: 49.27137486540427,
        lng: -122.79020512455538,
    },
    {
        name: "Everwood Floors",
        address: "53 A Fawcett Rd, Coquitlam, BC V3K 6X3",
        city: "Coquitlam",
        postalCode: "V3K 6X3",
        phone: "604-464-6654",
        website: "https://www.instagram.com/everwoodfloors/",
        lat: 49.22703370058988,
        lng: -122.8343233396855,
    },
    {
        name: "Welluck Floors",
        address: "6822 Palm Ave, Burnaby, BC V5J 4M3",
        city: "Burnaby",
        postalCode: "V5J 4M3",
        phone: "+16044379929",
        website: "https://www.welluckfloors.com/",
        lat: 49.22159495522961,
        lng: -122.98675684232856,
    },
    {
        name: "Century City Building Supply",
        address: "13331 Vulcan Wy Unit 7, Richmond, BC V6V 1Z5",
        city: "Richmond",
        postalCode: "V6V 1Z5",
        phone: "+16049777668",
        website: "http://www.centurycitysupply.com/",
        lat: 49.197671097826074,
        lng: -123.07962475877375,
    },
    {
        name: "Green Floors Inc.",
        address: "11180 Voyageur Way Unit 110, Richmond, BC V6X 3N8",
        city: "Richmond",
        postalCode: "V6X 3N8",
        phone: "604-284-3391",
        website: "https://greenfloorsinc.com/",
        lat: 49.19118558628604,
        lng: -123.10026053365758,
    },
    {
        name: "ARIA FLOORING CENTRE LTD",
        address: "3054 St Johns St, Port Moody, BC V3H 4B6",
        city: "Port Moody",
        postalCode: "V3H 4B6",
        phone: "778-898-7926",
        website: "http://www.ariaflooring.ca/",
        lat: 49.27805320441618,
        lng: -122.84281488798943,
    },
    {
        name: "Jawala Carpet and Floori  ng",
        address: "31018 Peardonville Rd unit 1, Abbotsford, BC V2T 6K2",
        city: "Abbotsford",
        postalCode: "V2T 6K2",
        phone: "778-245-2555",
        website: "http://jawalacarpetandflooring.ca/",
        lat: 49.04578487657153,
        lng: -122.36421571207686,
    },
    {
        name: "Alliance Carpets & Flooring Ltd.",
        address: "30445 Progressive Way Unit 6, Abbotsford, BC V2T 6W3",
        city: "Abbotsford",
        postalCode: "V2T 6W3",
        phone: "604-825-7659",
        website: "Comming Soon!",
        lat: 49.04912939860202,
        lng: -122.37979813179577,
    },
    {
        name: "Northview Flooring Langley",
        address: "20167 Industrial Ave, Langley, BC V3A 4K6",
        city: "Langley",
        postalCode: "V3A 4K6",
        phone: "604-791-6883",
        website: "http://www.northviewflooring.ca/",
        lat: 49.10894197740675,
        lng: -122.66316312124019,
    },
    {
        name: "Silkway Flooring",
        address: "13285 72 Ave Unit#13, Surrey, BC V3W 2N5",
        city: "Surrey",
        postalCode: "V3W 2N5",
        phone: "604-791-6883",
        website: "https://www.silkwayflooring.com/",
        lat: 49.13401944651328, 
        lng: -122.8540902740054,
    },
];

const locations = {
    richmond: { lat: 49.1666, lng: -123.1336 },
    vancouver: { lat: 49.2827, lng: -123.1207 },
    burnaby: { lat: 49.2488, lng: -122.9805 },
    surrey: { lat: 49.1913, lng: -122.8490 },
    coquitlam: { lat: 49.2838, lng: -122.7932 },
};


function distanceKm(a, b) {
    const R = 6371;
    const dLat = ((b.lat - a.lat) * Math.PI) / 180;
    const dLng = ((b.lng - a.lng) * Math.PI) / 180;

    const lat1 = (a.lat * Math.PI) / 180;
    const lat2 = (b.lat * Math.PI) / 180;

    const x =
        Math.sin(dLat / 2) ** 2 +
        Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);

    return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

export default function FindDealerPage() {
    const RADIUS_KM = 30;

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const useMyLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const userLocation = {
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                };

                const filtered = dealers
                    .map((dealer) => ({
                        ...dealer,
                        distance: distanceKm(userLocation, dealer),
                    }))
                    .filter((dealer) => dealer.distance <= RADIUS_KM)
                    .sort((a, b) => a.distance - b.distance);

                setResults(filtered);
            },
            () => {
                alert("Unable to retrieve your location.");
            }
        );
    };

    const searchDealers = async () => {
        const key = query.trim();

        try {
            const res = await axios.get(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
                    key
                )}.json`,
                {
                    params: {
                        access_token: import.meta.env.VITE_MAPBOX_TOKEN,
                        country: "ca",
                        limit: 1,
                    },
                }
            );

            const feature = res.data.features[0];

            if (!feature) {
                setResults([]);
                return;
            }

            const [lng, lat] = feature.center;

            const userLocation = { lat, lng };



            const cityFromSearch = feature.context
                ?.find((item) => item.id.includes("place"))
                ?.text?.toLowerCase();

            const filtered = dealers
                .map((dealer) => ({
                    ...dealer,
                    distance: distanceKm(userLocation, dealer),
                    sameCity: dealer.city.toLowerCase() === cityFromSearch,
                }))
                .filter((dealer) => dealer.distance <= RADIUS_KM)
                .sort((a, b) => {
                    if (a.sameCity && !b.sameCity) return -1;
                    if (!a.sameCity && b.sameCity) return 1;
                    return a.distance - b.distance;
                });

            setResults(filtered);
        } catch (err) {
            console.error(err);
            setResults([]);
        }
    };

    return (
        <section className="dealerLocatorPage">
            <div className="dealerLocatorHero">
                <p className="eyebrow">Find a Dealer</p>
                <h1>Find Clivia Floors Near You</h1>
                <p>
                    Enter your city or postal code to find authorized dealers within {RADIUS_KM} km.
                </p>

                <div className="dealerSearchBox">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                searchDealers();
                            }
                        }}
                        placeholder="Enter city or postal code"
                    />
                    <button onClick={searchDealers}>Search</button>
                </div>

                <button className="useLocationBtn" onClick={useMyLocation}>
                    📍 Use my location
                </button>
            </div>

            <div className="dealerResults">
                {results.length === 0 && query && (
                    <p className="noResult">No dealers found within 45 km.</p>
                )}

                {results.map((dealer) => (
                    <div className="dealerCard" key={dealer.name}>
                        <h3>{dealer.name}</h3>
                        <p>{dealer.address}</p>
                        <p>{dealer.phone}</p>
                        <strong>{dealer.distance.toFixed(1)} km away</strong>

                        <div className="dealerActions">
                            <a href={`tel:${dealer.phone}`}>Call</a>
                            <a href={dealer.website} target="_blank" rel="noreferrer">
                                Website
                            </a>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                    dealer.address
                                )}`}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Directions
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}