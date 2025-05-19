-- Populando a tabela 'user'
INSERT INTO user (firstName, fullName, email, password, role, userImgSrc) VALUES
  ('Álvaro', 'Álvaro Nascimento', 'alvaro@ford.com', '12345678','admin', 'https://avatars.githubusercontent.com/u/107280409?v=4'),
  ('Admin', 'Administrador', 'admin@ford.com', '123456', 'admin', NULL),
  ('Fulano', 'Fulano da Silva', 'fulano@ford.com', '123456', 'user', NULL);

-- Populando a tabela 'vehicle'
INSERT INTO vehicle (model, totalSale, connected, softwareUpdates, imageSrc) VALUES
  ('Ranger', 145760, 70000, 27550, '/images/ranger.png'),
  ('Mustang', 1500, 500, 750, '/images/mustang.png'),
  ('Territory', 4560, 4000, 3050, '/images/territory.png'),
  ('Bronco Sport', 7560, 4060, 2050, '/images/broncoSport.png');

-- Populando a tabela 'vehicleData'
INSERT INTO vehicleData (vinCode, odometer, tirePressure, status, batteryStatus, fuelLevel, lat, long) VALUES
  ('2FRHDUYS2Y63NHD22454', 23344, '36,36,35,34', 'on', 'Ok', 76, -12.2322, -35.2314),
  ('2RFAASDY54E4HDU34874', 130000, '36,34,36,33', 'off', 'Recharge', 19, -12.2322, -35.2314),
  ('2FRHDUYS2Y63NHD22455', 50000, '36,36,35,34', 'on', 'Ok', 90, -12.2322, -35.2314),
  ('2RFAASDY54E4HDU34875', 10000, '36,34,36,33', 'off', 'Ok', 25, -12.2322, -35.2314),
  ('2FRHDUYS2Y63NHD22654', 23544, '36,36,35,34', 'on', 'Ok', 76, -12.2322, -35.2314),
  ('2FRHDUYS2Y63NHD22854', 23574, '36,36,35,34', 'on', 'Ok', 76, -12.2322, -35.2314);

-- Populando a tabela 'rangerInfos'
INSERT INTO rangerInfos (modelName, imgSrc, price, bucketHeight, bucketVolume, vehicleHeight, groundHeight, loadCapacity, engine, power, wheel) VALUES
  ('XL Cabine Simples 2.2 Diesel 4X4 MT 2022', '/images/ranger-xl-cabine-simples.jpg', 183850, 511, 1420,1821, 232, 1234, 2.2, 160, 'Aço Estampado 16'),
  ('XLS 2.2 Diesel 4X4 AT 2022', '/images/ranger-xls-2.2.jpg', 220690, 511, 1180, 1821, 232, 1076, 2.2, 160, 'Aço Estampado 16'),
  ('Storm 3.2 Diesel 4X4 AT 2022', '/images/ranger-storm.jpg', 222790, 511, 1180, 1821, 232, 1040, 3.2, 200, 'Liga Leve 17');

-- Populando a tabela 'carouselImage'
INSERT INTO carouselImage (imgSrc, legend, launchPage) VALUES
('/images/imagem_1.jpg', 'Esta é a nova Ranger Ford 2022. Verifique novidades.', ''),
('/images/imagem_2.jpg', 'Ford a nossa história', ''),
('/images/imagem_3.jpg', 'Nova Ford Bronco Sport 2022.', '')
