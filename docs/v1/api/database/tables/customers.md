## Müşteriler Tablosu

### Tablo adı : `customers`

| Alan Adı       | Tür      | Zorunluluk | Açıklama                     | Örnek Değer                             |
| -------------- | -------- | ---------- | ---------------------------- | --------------------------------------- |
| `customer_id`  | int      | Zorunlu    | Müşteri kimliği (benzersiz)  | unique id, sistem belirler bunu         |
| `company_id`   | int      | Zorunlu    | İlgili şirketin kimliği      | Şirket kimliği                          |
| `name`         | varchar  | Zorunlu    | Müşteri adı                  | Müşteri adı                             |
| `first_name`   | string   | Evet       | Müşterinin adı               | "John"                                  |
| `last_name`    | string   | Evet       | Müşterinin soyadı            | "Doe"                                   |
| `email`        | varchar  | Zorunlu    | Müşteri e-posta adresi       | Müşteri e-posta adresi                  |
| `phone`        | varchar  | Opsiyonel  | Müşteri telefon numarası     | Müşteri telefon numarası (isteğe bağlı) |
| `address`      | string   | Hayır      | Müşterinin adresi            | "123 Main St, City, Country"            |
| `created_at`   | datetime | Evet       | Müşterinin kayıt tarihi      | "2023-08-30 15:30:00"                   |
| `updated_at`   | datetime | Evet       | Müşterinin güncelleme tarihi | "2023-08-30 15:30:00"                   |
