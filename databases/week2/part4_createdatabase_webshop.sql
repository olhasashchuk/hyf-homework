CREATE TABLE `provider` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `email` varchar(255) NOT NULL,
   `phone` varchar(255) NOT NULL,
   `address` varchar(255),
   `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `category` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `description` varchar(255),
   `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `customer` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `firstName` varchar(255) NOT NULL,
   `lastName` varchar(255) NOT NULL,
   `email` varchar(255) NOT NULL,
   `phone` varchar(255) NOT NULL,
   `address` varchar(255),
   `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `statusProduct` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `statusOrder` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `product` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `name` varchar(255) NOT NULL,
   `description` varchar(255) NOT NULL,
   `price` DECIMAL(10, 2) NOT NULL,
   `quantity` INT NOT NULL,
   `category_id` int(10) unsigned,
   `provider_id` int(10) unsigned,
   `statusProduct_id` int(10) unsigned,
   `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `updatedDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_provider` FOREIGN KEY (`provider_id`) REFERENCES `provider` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_statusProduct` FOREIGN KEY (`statusProduct_id`) REFERENCES `statusProduct` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `paymentMethods` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `methodName` VARCHAR(100) NOT NULL,
   `description` TEXT,
   `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `shippingMethods` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `methodName` VARCHAR(100) NOT NULL, --change
   `description` TEXT,
   `cost` DECIMAL(10, 2) NOT NULL,
   `createdDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `order` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `customer_id` int(10) unsigned NOT NULL,
   `product_id` int(10) unsigned NOT NULL,
   `orderDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `quantityOrder` INT NOT NULL,
   `totalAmount` DECIMAL(10, 2) NOT NULL,
   `paymentMethods_id` int(10) unsigned NOT NULL,
   `shippingAddress` TEXT,
   `shippingMethods_id` int(10) unsigned NOT NULL,
   `statusOrder_id` int(10) unsigned NOT NULL,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_product` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_statusOrder` FOREIGN KEY (`statusOrder_id`) REFERENCES `statusOrder` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_paymentMethods` FOREIGN KEY (`paymentMethods_id`) REFERENCES `paymentMethods` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_shippingMethods` FOREIGN KEY (`shippingMethods_id`) REFERENCES `shippingMethods` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `transactions` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `order_id` int(10) unsigned NOT NULL,
   `amount` DECIMAL(10, 2) NOT NULL,
   `transactionDate` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `transactionType` ENUM('purchase', 'refund') NOT NULL,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_order` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `returns` (
   `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
   `order_id` int(10) unsigned NOT NULL,
   `product_id` int(10) unsigned NOT NULL,
   `reason` TEXT,
   `status` VARCHAR(50),
   `dateRequested` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
   `dateProcessed` TIMESTAMP,
   PRIMARY KEY (`id`),
   CONSTRAINT `fk_order_returns` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE,
   CONSTRAINT `fk_product_returns` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;