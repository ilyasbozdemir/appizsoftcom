#### Payments (Ödemeler) Tablosu

### Tablo adı : `payments`

| Alan Adı       | Tür      | Zorunluluk | Açıklama                  | Örnek Değer                         |
| -------------- | -------- | ---------- | ------------------------- | ----------------------------------- |
| `payment_id`   | int      | Zorunlu    | Ödeme kimliği (benzersiz) | Unique ID, sistem tarafından atanır |
| `customer_id`  | int      | Zorunlu    | İlgili müşterinin kimliği | Müşteri kimliği                     |
| `amount`       | numeric  | Zorunlu    | Ödeme miktarı             | 100.50                              |
| `payment_date` | datetime | Zorunlu    | Ödeme tarihi              | 2023-08-30 15:30:00                 |
| `description`  | text     | Opsiyonel  | Ödeme açıklaması          | Ödeme açıklaması (isteğe bağlı)     |

