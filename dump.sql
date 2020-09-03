CREATE TABLE IF NOT EXISTS `LINKS` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `parent` int(11) NOT NULL,
  `url` varchar(500) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0',
  `qtd_links` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;