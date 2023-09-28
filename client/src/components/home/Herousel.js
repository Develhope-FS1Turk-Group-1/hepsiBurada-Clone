import '../../style/homePage/herousel.css';
import share from "../../images/homePage/share.svg"
import rightArrow from "../../images/homePage/rightArrow.svg"
import leftArrow from "../../images/homePage/leftArrow.svg"
import React, { useState, useEffect, useRef } from 'react';


function Herousel() {

    const titles = [
        {
            name: "electronic",
            id: "0",
            bottomSlider: [
                {
                    name: "brandDays",
                    text: "Her gün yenilenen markalarda fırsatlarla",
                    text2: "şimdi al, 3 ay sonra öde",
                    buttonText: "Acele et kaçırma",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2110_20230919103617.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2126_20230916175658.jpeg/format:webp",
                    id: 0,
                },
                {
                    name: "electronic",
                    text: "Her gün yenilenen",
                    text2: "elektronik fırsatlar",
                    buttonText: "Acele et kaçırma",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2104_20230918091328.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2097_20230918091321.jpeg/format:webp",
                    id: 1,
                },
                {
                    name: "iphone15",
                    text: "Hepsiburada limitinle",
                    text2: "alışverişe başla",
                    buttonText: "Fırsatı kaçırma",
                    miniText: "",
                    backgroundImage: "",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2107_20230920093013.png/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2097_20230919102804.png/format:webp",
                    id: 2,
                },
                {
                    name: "msi",
                    text: "Oyuncu bilgisayarlarında",
                    text2: "bu fiyatlar kaçmaz",
                    buttonText: "Hemen keşfet",
                    miniText: "Stok Adet: 100",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2081_20230918131301.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2132_20230918131252.jpeg/format:webp",
                    id: 3,
                },
                {
                    name: "kaira",
                    text: "Kaira klimalarda",
                    text2: "sepette %10 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2137_20230918200954.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2131_20230918200948.jpeg/format:webp",
                    id: 4,
                },
                {
                    name: "philips",
                    text: "Philips kişisel bakım ürünlerinde",
                    text2: "1500TL'ye 150TL indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2148_20230915123451.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2144_20230915123446.jpeg/format:webp",
                    id: 5,
                },
                {
                    name: "samsung",
                    text: "Samsung telefon ve aksesuarlarda",
                    text2: "avantajlı fırsatlar",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2065_20230919090101.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2175_20230919090052.jpeg/format:webp",
                    id: 6,
                },
                {
                    name: "huawei",
                    text: "Favori bilgisayar ve tabletlerde",
                    text2: "süper fiyatlar",
                    miniText: "Stok adet: 200",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2128_20230919172137.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2142_20230919172546.jpeg/format:webp",
                    id: 7,
                },
                {
                    name: "lenovo",
                    text: "Çok satan bilgisayar ve tabletlerde",
                    text2: "avantajlı fiyatlar",
                    miniText: "Stok adet: 100",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2154_20230919173152.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2132_20230915152045.jpeg/format:webp",
                    id: 8,
                },
                {
                    name: "vestel",
                    text: "Vestel küçük ev aletlerinde",
                    text2: "sepette %10 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2141_20230919141953.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2133_20230919141945.jpeg/format:webp",
                    id: 9,
                },
                {
                    name: "tefal",
                    text: "Tefal küçük ev aletlerinde",
                    text2: "sepette %10 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2132_20230920084128.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2128_20230920084122.jpeg/format:webp",
                    id: 10,
                },
                {
                    name: "iphone15",
                    text: "Çok aranan teknoloji aksesuarlarında",
                    text2: "özel fiyatlar",
                    miniText: "Stok adet: 100",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2071_20230919170257.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2129_20230919170454.jpeg/format:webp",
                    id: 11,
                },
            ]
        },
        {
            name: "schoolShopping",
            id: 1,
            bottomSlider: [
                {
                    name: "karaca",
                    text: "Karaca sofra ve mutfak ürünlerinde",
                    text2: "2.'si %50 indirimli",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2116_20230918160839.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2105_20230918160728.jpeg/format:webp",
                    id: 0,
                },
                {
                    name: "englishhome",
                    text: "English Home ev ve yaşam ürünlerinde",
                    text2: "500 TL ve üzerine %25 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2160_20230915155443.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2147_20230915155426.jpeg/format:webp",
                    id: 1,
                },
                {
                    name: "perwoll",
                    text: "Perwoll 3 litre sıvı deterjanlarda",
                    text2: "tek fiyat 109,90 TL",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2099_20230919161414.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2092_20230919161408.jpeg/format:webp",
                    id: 2,
                },
                {
                    name: "porland",
                    text: "Porland sofra ve sunum ürünlerinde",
                    text2: "sepette %15 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2086_20230918162056.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2142_20230918162051.jpeg/format:webp",
                    id: 3,
                },
                {
                    name: "neoflam",
                    text: "Neoflam tencere ve tavalarda",
                    text2: "sepette %15 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2128_20230918150555.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2124_20230918150550.jpeg/format:webp",
                    id: 4,
                },
                {
                    name: "varol",
                    text: "Varol ev tekstili ürünlerinde",
                    text2: "sepette %15 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2173_20230918155750.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2169_20230918155743.jpeg/format:webp",
                    id: 5,
                },
                {
                    name: "xdrive",
                    text: "xDrive oyuncu koltuklarında",
                    text2: "sepette %15 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2128_20230918164712.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2120_20230918164702.jpeg/format:webp",
                    id: 6,
                },
                {
                    name: "tefal",
                    text: "Tefal tencere ve tavalarda",
                    text2: "sepette %15 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2115_20230915153218.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2111_20230915153212.jpeg/format:webp",
                    id: 7,
                },
                {
                    name: "rabi",
                    text: "Rabi mobilyalarda",
                    text2: "sepette %10 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2070_20230918130657.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2117_20230918130644.jpeg/format:webp",
                    id: 8,
                },
                {
                    name: "elseve",
                    text: "Çok sevilen saç bakım ürünlerinde",
                    text2: "250 TL'ye sepette %15 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2131_20230919140954.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2124_20230919140947.jpeg/format:webp",
                    id: 9,
                },
                {
                    name: "madamecoco",
                    text: "Madame Coco ev ve yaşam ürünlerinde",
                    text2: "300 TL ve üzerine %15 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2168_20230919155644.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2165_20230919155639.jpeg/format:webp",
                    id: 10,
                },
                {
                    name: "neeko",
                    text: "Neeko aydınlatma ürünlerinde",
                    text2: "sepette %20 net indirim",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2120_20230918163912.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2117_20230918163908.jpeg/format:webp",
                    id: 11,
                },
            ]
        },
        {
            name: "gamerchance",
            id: "2",
            bottomSlider: [
                {
                    name: "hepsigamer",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/672-378/bannerImage2123_20230924210145.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2120_20230915132728.jpeg/format:webp",
                    id: 0,
                },
                {
                    name: "msi",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2141_20230921145617.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2138_20230921145612.jpeg/format:webp",
                    id: 1,
                },
                {
                    name: "monster",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2120_20230921161832.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2113_20230921161823.jpeg/format:webp",
                    id: 2,
                },
                {
                    name: "hp",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2137_20230922085618.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2133_20230922085612.jpeg/format:webp",
                    id: 3,
                },
                {
                    name: "nvidia",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2136_20230921160957.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2113_20230921160932.jpeg/format:webp",
                    id: 4,
                },
                {
                    name: "asus",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2166_20230922090044.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2161_20230922090035.jpeg/format:webp",
                    id: 5,
                },
                {
                    name: "lenovo",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2119_20230922092729.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2106_20230922092119.jpeg/format:webp",
                    id: 6,
                },
                {
                    name: "logitech",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2115_20230922091039.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2108_20230922091032.jpeg/format:webp",
                    id: 7,
                },
                {
                    name: "gamebooster",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2116_20230921142524.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2111_20230921142516.jpeg/format:webp",
                    id: 8,
                },
                {
                    name: "dxracer",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2119_20230922092729.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2136_20230920152937.jpeg/format:webp",
                    id: 9,
                },
                {
                    name: "xbox",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2143_20230418233401.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "https://images.hepsiburada.net/banners/s/0/1344-756/bannerImage2162_20230524154913.jpeg/format:webp",
                    image: "https://images.hepsiburada.net/banners/s/0/71-40/thumbnailImage2156_20230524154905.jpeg/format:webp",
                    id: 10,
                },
            ]
        },
        {
            name: "kampanyalar",
            id: "3",
            bottomSlider: [
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 1,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 2,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 3,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 4,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 5,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 6,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 7,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 8,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 9,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 10,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 11,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 12,
                },
            ]
        },
        {
            name: "amazinprice",
            id: "4",
            bottomSlider: [
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 1,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 2,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 3,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 4,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 5,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 6,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 7,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 8,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 9,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 10,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 11,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 12,
                },
            ]
        },
        {
            name: "tech",
            id: "5",
            bottomSlider: [
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 1,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 2,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 3,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 4,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 5,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 6,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 7,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 8,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 9,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 10,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 11,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 12,
                },
            ]
        },
        {
            name: "forYou",
            id: "6",
            bottomSlider: [
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 1,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 2,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 3,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 4,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 5,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 6,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 7,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 8,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 9,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 10,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 11,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 12,
                },
            ]
        },
        {
            name: "privileges",
            id: "7",
            bottomSlider: [
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 1,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 2,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 3,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 4,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 5,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 6,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 7,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 8,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 9,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 10,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 11,
                },
                {
                    name: "iphone15",
                    text: "aaaa",
                    text2: "aaa",
                    miniText: "",
                    backgroundImage: "https://images.hepsiburada.net/banners/s/0/1920-540/backgroundImage2130_20230914180953.jpeg/format:webp",
                    buttonText: "Acele et kaçırma",
                    baseImage: "aaaa",
                    image: "aaaa",
                    id: 12,
                },
            ]
        }
    ]

    const headerTitles = [
        {
            text: "Elektronik",
            id: 0
        },
        {
            text: "Okul Alışverişi",
            id: 1
        },
        {
            text: "Gamer Fırsatları",
            id: 2
        },
        {
            text: "Kampanyalar",
            id: 3
        },
        {
            text: "Kaçırılmayacak Fiyatlar",
            id: 4
        },
        {
            text: "Teknolojik Fırsatlar",
            id: 5
        },
        {
            text: "Sana Özel Fırsatlar",
            id: 6
        },
        {
            text: "Ayrıcalıklar",
            id: 7
        },
    ]

    const [titlesCount, setTitlesCount] = useState(0)
    const [sliderCount, setSliderCount] = useState(0)
    const [styleShare, setStyleShare] = useState({ display: "none" })

    const nextSlide = () => {
        if (sliderCount < titles[titlesCount].bottomSlider.length - 1) {
            setSliderCount(sliderCount + 1)
        } else if (titlesCount < headerTitles.length - 1) {
            setTitlesCount(titlesCount + 1)
            setSliderCount(0)
        }
    }

    const prevSlide = () => {
        if (sliderCount == 0 && titlesCount != 0) {
            setTitlesCount(titlesCount - 1)
        } else if (sliderCount > 0) {
            setSliderCount(sliderCount - 1)
        }
    }

    const shareMenuRef = useRef(null);

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const handleOutsideClick = (e) => {
        if (shareMenuRef.current && !shareMenuRef.current.contains(e.target)) {
            setStyleShare({ display: "none" });
        }
    }

    const changeDisp = () => { setStyleShare({ display: "block" }) }

    const styleBut = {}
    let buttonContent = ""
    if (sliderCount == titles[titlesCount].bottomSlider.length - 1) {
        styleBut.width = "max-content"
        buttonContent = `${headerTitles[titlesCount + 1].text}`
    }

    const stylePrevBut = {}
    let prevButtonContent = ""
    if (titlesCount == 0 && sliderCount == 0) {
        stylePrevBut.display = "none"
    } else if (sliderCount == 0) {
        stylePrevBut.width = "200px"
        prevButtonContent = `${headerTitles[titlesCount - 1].text}`
    }


    return (
        <div className="herouselAllContainer" style={{
            backgroundImage: "url(" + `${titles[titlesCount].bottomSlider[sliderCount].backgroundImage}` + ")",
        }}>
            <div className="herouselHeader">
                {headerTitles.map((title, index) => (
                    <div
                        className={titlesCount == title.id ? "titleBackground": ""}
                        key={index}
                        id='herouselHeaderTitle'
                        onClick={() => { setTitlesCount(title.id) }}
                    ><span>{title.text}</span></div>
                ))}
            </div>
            <div className='herouselAllBaseTemplate' >
                <div className='herouselBaseTemplate'>
                    <div className='herouselBaseTemplateLeft'>
                        <div className='herouselBaseTemplateLeftContainer' >
                            <div ref={shareMenuRef}>
                                <button id='shareImage' onClick={changeDisp} ><img src={share} /></button>
                                <div className="allShareMenu" ref={shareMenuRef} style={styleShare}>
                                    <ul className='shareMenu'>
                                        <li className='social'>
                                            <div className='imagewp'></div>
                                            <div>WhatsApp’dan paylaş</div>
                                        </li>
                                        <li className='social'>
                                            <div className='imagefb'></div>
                                            <div>Facebook’ta paylaş</div>
                                        </li>
                                        <li className='social'>
                                            <div className='imagetw'></div>
                                            <div>Twitter’da paylaş</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='textsContainer'>
                                <span>{titles[titlesCount].bottomSlider[sliderCount].text}</span>
                                <br />
                                <span>{titles[titlesCount].bottomSlider[sliderCount].text2}</span>
                            </div>
                            <button>{titles[titlesCount].bottomSlider[sliderCount].buttonText}</button>
                            <p>
                                {titles[titlesCount].bottomSlider[sliderCount].miniText}
                            </p>
                        </div>
                    </div>
                    <div className='herouselBaseTemplateRight'
                        style={{
                            backgroundImage: "url(" + `${titles[titlesCount].bottomSlider[sliderCount].baseImage}` + ")",
                        }}
                    ></div>
                </div>
            </div>
            <div className='herouselPagination'>
                <button style={stylePrevBut} onClick={prevSlide}>{prevButtonContent} &nbsp; <img id='arrow' src={leftArrow} /></button>
                <ul>
                    {titles[titlesCount].bottomSlider.map((slide) => (
                        <li>
                            <div className="personSlider">
                                <img onClick={() => setSliderCount(slide.id)} src={slide.image} />
                            </div>
                        </li>
                    ))}
                </ul>
                <button style={styleBut} onClick={nextSlide}><img id='arrow' src={rightArrow} /> &nbsp; {buttonContent}</button>
            </div>
        </div>
    );
}

export default Herousel;
