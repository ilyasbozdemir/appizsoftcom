# Açık Pozisyon (Kariyer) API Dokümantasyonu
- Kariyer kısmında şirkete açılacak pozisyon için ekleme silme güncelleme ve listeleme hakkında bilgi verilmiştir

Kariyer kısmında şirkete açılacak pozisyon için ekleme silme güncelleme ve listeleme hakkında bilgi verilmiştir

- Güncellenecektir [Veritabanı Şeması](database.md) dosyasına göre


  <summary><h2>Kariyer</h2></summary>
  
Kariyerlerle ilgili işlemler. Bu işlemler JWT yetkilendirmesi gerektirir.

### Tüm Kariyerleri Getir

Tüm kariyerleri almak için kullanılır.

#### İstek

- **Yol:** `/api/v1/careers`
- **Metod:** GET
- **Parametreler:** Yok
- **Headers:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

| Parametre        | Tür     | Zorunluluk | Açıklama                     | Örnek                               |
| ---------------- | ------- | ---------- | ---------------------------- | ----------------------------------- |
| `id`             | int     | Zorunlu    | Kariyer id                   | unique id, sistem belirler bunu     |
| `type`           | string  | Zorunlu    | Kariyer tipi                 | Technology,Design,Shared Services   |
| `title`          | string  | Zorunlu    | Kariyer başlığı              | Kariyer için Başlık                 |
| `pageLoc`        | string  | Zorunlu    | Sayfa konumu                 | kariyer içn dinamik sayfa adı       |
| `description`    | string  | Zorunlu    | Açıklama                     | açılan pozisyon için açıklama       |
| `requirements`   | array   | Zorunlu    | Gereksinimler listesi        | dizi olarak gereksinimleri belirtin |
| `location`       | string  | Zorunlu    | Konum bilgisi                | "Ankara, Türkiye" veya "Uzaktan"    |
| `employmentType` | string  | Zorunlu    | İstihdam tipi                | tam zamanlı yarı zamanlı gibi       |
| `isOpen`         | boolean | Zorunlu    | Kariyer durumu (açık/kapalı) | true,false                          |

#### Yanıt (Response):

Başarılı bir giriş durumunda, aşağıdaki gibi bir yanıt alırsınız:

```json
[
  {
    "id": "asd1132",
    "type": "Technology",
    "title": "Frontend Developer",
    "pageLoc": "frontend-developer",
    "description": "Özgün fikirlerle frontend geliştirme ekibimize katılın ve kullanıcı deneyimlerini şekillendirin. Uzaktan çalışma imkanı.",
    "requirements": [
      "En az 2 yıl frontend geliştirme deneyimi",
      "HTML, CSS ve JavaScript konularında uzmanlık",
      "Modern UI/UX tasarım prensiplerini uygulama yeteneği",
      "En az bir frontend framework'üne hakimiyet"
    ],
    "location": "Uzaktan",
    "employmentType": "Tam Zamanlı"
  }
]
```

### Yeni Kariyer Ekle

Yeni bir kariyer eklemek için kullanılır.

- **Yol:** `/api/v1//careers`
- **Metod:** POST

- **Parametreler:**

| Parametre        | Tür     | Zorunluluk | Açıklama                     | Örnek                               |
| ---------------- | ------- | ---------- | ---------------------------- | ----------------------------------- |
| `type`           | string  | Zorunlu    | Kariyer tipi                 | Technology,Design,Shared Services   |
| `title`          | string  | Zorunlu    | Kariyer başlığı              | Kariyer için Başlık                 |
| `pageLoc`        | string  | Zorunlu    | Sayfa konumu                 | kariyer içn dinamik sayfa adı       |
| `description`    | string  | Zorunlu    | Açıklama                     | açılan pozisyon için açıklama       |
| `requirements`   | array   | Zorunlu    | Gereksinimler listesi        | dizi olarak gereksinimleri belirtin |
| `location`       | string  | Zorunlu    | Konum bilgisi                | "Ankara, Türkiye" veya "Uzaktan"    |
| `employmentType` | string  | Zorunlu    | İstihdam tipi                | tam zamanlı yarı zamanlı gibi       |
| `isOpen`         | boolean | Zorunlu    | Kariyer durumu (açık/kapalı) | true,false                          |

- **Headers:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

#### İstek

```http
POST /api/v1/careers
Content-Type: application/json
Authorization: Bearer {YOUR_JWT_TOKEN}

{
  "type": "Technology",
  "title": "Frontend Developer",
  "pageLoc": "frontend-developer",
  "description": "Hızla büyüyen ekibimize katılmak için yetenekli bir frontend geliştirici arıyoruz.\nİstanbul, Türkiye konumunda.",
  "requirements": [
    "En az 2 yıl frontend geliştirme deneyimi",
    "Web teknolojilerine hakimiyet",
    "React veya Angular gibi frameworklerde tecrübe",
    "Kreatif tasarım yeteneği tercih sebebi"
  ],
  "location": "İstanbul, Türkiye",
  "employmentType": "Tam Zamanlı",
    "isOpen": true
}
```

#### Yanıt

```
{
  "message": "Yeni kariyer başarıyla eklendi."
}
```

## Kariyer Güncelle

Bir kariyer verisini güncellemek için kullanılır.

- **Yol:** `/api/v1//careers/:pageLoc`
- **Metod:** PUT

- **Parametreler:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

| Parametre | Tür | Zorunluluk | Açıklama                                |
| --------- | --- | ---------- | --------------------------------------- |
| `id     ` | int | Zorunlu    | Güncellenecek kariyerin benzersiz id'si |

- **Headers:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

- **İstek:**

```http
PUT /api/v1/careers/{career-id}
Content-Type: application/json
Authorization: Bearer {YOUR_JWT_TOKEN}

{
  "type": "Technology",
  "title": "Yazılım Geliştirme Uzmanı",
  "pageLoc": "{career-id}",
  "description": "Yazılım geliştirme uzmanı pozisyonu için deneyimli adaylar arıyoruz.",
  "requirements": [
    "En az 5 yıl deneyim",
    "İleri seviye programlama bilgisi",
    "Proje yönetimi yeteneği"
  ],
  "location": "İstanbul, Türkiye",
  "employmentType": "Tam Zamanlı",
    "isOpen": true
}
```

#### Yanıt

```
{
"message": "Kariyer başarıyla güncellendi."
}

```

## Kariyer Sil

Bir kariyer verisini güncellemek için kullanılır.

- **Yol:** `/api/v1//careers/:pageLoc`
- **Metod:** DELETE

- **Parametreler:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

| Parametre | Tür | Zorunluluk | Açıklama                            |
| --------- | --- | ---------- | ----------------------------------- |
| `id     ` | int | Zorunlu    | Silinecek kariyerin benzersiz id'si |

- **Headers:** `Authorization: Bearer {YOUR_JWT_TOKEN}`

- **İstek:**

```http
DELETE  /api/v1/careers/{career-id}
Content-Type: application/json
Authorization: Bearer {YOUR_JWT_TOKEN}

```

#### Yanıt

```
{
"message": "Kariyer başarıyla silindi."
}

```
