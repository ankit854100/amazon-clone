import React from 'react'
import "./home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/M12/GW_launch/Sale/25thMar/D21200796_IN_WLME_SamsungGalaxy_M12_New_Launch_DesktopTallHero_1500x600._CB657376691_.jpg"
                    alt="home image"
                />
            </div>
            <div className="home__row">
                <Product
                    id="0001"
                    title="(Renewed) Google Pixel 4a (Just Black, 6GB RAM, 128GB Storage)"
                    price={26199}
                    image="https://m.media-amazon.com/images/I/71tkGDmhN3L._AC_UY218_.jpg"
                    rating={4}
                />
                <Product
                    id='0006'
                    title="Harry Potter Box Set: The Complete Collection (Children’s Paperback) (Set of 7 Volumes)"
                    price={2824}
                    image="https://m.media-amazon.com/images/I/71rOzy4cyAL._AC_UY218_.jpg"
                    rating={5}
                />
            </div>
            <div className="home__row">
                <Product
                    id="0002"
                    title="PS4 1TB Slim Bundled with Spider-Man, GTaSport, Ratchet & Clank And PSN 3 Month"
                    price={29990}
                    image="https://m.media-amazon.com/images/I/81cIK-WlKDL._AC_UY218_.jpg"
                    rating={4}
                />
                <Product
                    id="0003"
                    title="PS4 Marvel's Spider-Man: Miles Morales (PS4)"
                    price={3199}
                    image="https://m.media-amazon.com/images/I/811umGHYORL._AC_UY218_.jpg"
                    rating={4}

                />
                <Product
                    id="0004"
                    title="Dobe PS4/PS4 Slim/PS4 Pro Multifunctional Vertical Stand Cooling Fan Stand, PS4 Controller Charger with LED Indicators, Charging Dock Station with 12PCS Games Storage for PS4/PS4 Slim, PS4 Pro Console"
                    image="https://m.media-amazon.com/images/I/61kbbIv3g+L._AC_UY218_.jpg"
                    price={2698}
                    rating={4}
                />
            </div>
            <div className="home__row">
                <Product
                    id="0005"
                    title="ASUS ZenBook 14 (2020) Intel Core i5-1135G7 11th Gen 14-inch FHD Thin and Light Laptop (8GB RAM/512GB NVMe SSD/Windows 10/MS Office 2019/Intel Iris Xᵉ Graphics/Pine Grey/1.17 kg), UX425EA-BM501TS"
                    price={76490}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/December/1500x300-gram.jpg"
                    rating={5}
                />
            </div>
        </div>
    )
}

export default Home
