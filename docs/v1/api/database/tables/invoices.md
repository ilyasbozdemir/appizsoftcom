### Fatura (Invoices) Tablosu

### Tablo adı : `invoices`

"Faturalar" tablosu, müşterilere ait faturaların kaydedildiği bir tabloyu temsil eder. Bu tablo, özellikle gelir ve gider takibi yapmak için kullanışlıdır.

| Alan Adı       | Tür               | Zorunlu | Açıklama                                           | Örnek Değer                   |
| -------------- | ----------------- | ------- | -------------------------------------------------- | ----------------------------- |
| `invoice_id`   | int               | Zorunlu | Fatura kimliği (benzersiz)                        | unique id, sistem belirler     |
| `customer_id`  | int               | Zorunlu | İlgili müşterinin kimliği                         | Müşteri kimliği               |
| `invoice_date` | date              | Zorunlu | Fatura tarihi                                     | "2023-08-30" gibi              |
| `total_amount` | decimal(10, 2)    | Zorunlu | Toplam fatura tutarı                              | 250.00                        |
| `is_paid`      | boolean           | Zorunlu | Fatura ödeme durumu (açık/kapalı)                 | true/false                    |
| `items`        | jsonb[]            | Zorunlu | Alınan malların listesi (JSONB dizisi olarak)   | [ {"name": "Ürün 1", "quantity": 2, "price": 50.00}, {"name": "Ürün 2", "quantity": 1, "price": 100.00} ] |

Bu tablo, müşterilere ait faturaların kaydedildiği ve takip edildiği bir yapıdır. "items" alanı, fatura içeriğini JSONB dizisi olarak saklar. Ödeme durumu "is_paid" ile belirtilir.
