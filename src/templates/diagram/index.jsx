import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
import {
  Select,
  Box,
  Text,
  Input,
  Heading,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import Container from "Components/container";

const Diagram = () => {
  const [state, setState] = useState([]);
  const [ticker, setTicker] = useState("BTC");
  const [currency, setCurrency] = useState("USD");
  const [dateFrom, setDateFrom] = useState("2021-01-01");
  const [dateTo, setDateTo] = useState(moment().format("YYYY-MM-DD"));

  useEffect(() => {
    axios
      .get(
        `https://api.covalenthq.com/v1/pricing/historical/${currency}/${ticker}/?from=${dateFrom}&to=${dateTo}&prices-at-asc=true`
      )
      .then((response) => setState(response.data))
      .catch((error) => console.error(error));
  }, [ticker, dateFrom, dateTo, currency]);

  const data = state?.data?.prices.map(({ date, price }) => ({
    name: date,
    [ticker]: price,
  }));

  return (
    <>
      <Container py={{ base: "32px", md: "64px" }}>
        <Heading textAlign="center" variant="h1">
          Практичне застосування
        </Heading>
        <Text textAlign="center" variant="subtitle">
          Завдяки Covalent API ми з легкістю отримуємо дані, які потрібні
          наприклад для візуалізації графіків курсу криптовалю у протягом
          певного часу. Ми може гнучко змінювати вихідні дані, там шкидко
          отримувати результат з миттєвою перебудовою графіку
        </Text>
        <Box
          mb={10}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <FormControl
            mb={{ base: "16px", md: "0" }}
            mr={{ base: "0", md: "16px" }}
          >
            <FormLabel>Тікер</FormLabel>
            <Select
              value={ticker}
              onChange={(event) => setTicker(event.target.value)}
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="BNB">BNB</option>
              <option value="USDT">USDT</option>
              <option value="UNI">UNI</option>
              <option value="VEN">VEN</option>
            </Select>
            <FormHelperText>Оберіть абревіатуру криптовалюти</FormHelperText>
          </FormControl>

          <FormControl
            mb={{ base: "16px", md: "0" }}
            mr={{ base: "0", md: "16px" }}
          >
            <FormLabel>Валюта</FormLabel>
            <Select
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
              <option value="CNY">CNY</option>
            </Select>
            <FormHelperText>Оберіть національну валюту</FormHelperText>
          </FormControl>

          <FormControl
            mb={{ base: "16px", md: "0" }}
            mr={{ base: "0", md: "16px" }}
          >
            <FormLabel>Початкова дата</FormLabel>
            <Input
              id="date-from"
              type="date"
              onChange={(e) => setDateFrom(e.target.value)}
              value={dateFrom}
            />
            <FormHelperText>
              Результат буде отриманий від цієї дати
            </FormHelperText>
          </FormControl>

          <FormControl
            mb={{ base: "16px", md: "0" }}
            mr={{ base: "0", md: "16px" }}
          >
            <FormLabel>Кінцева дата</FormLabel>
            <Input
              id="date-to"
              type="date"
              onChange={(e) => setDateTo(e.target.value)}
              value={dateTo}
            />
            <FormHelperText>
              Результат буде отриманий до вказаної дати
            </FormHelperText>
          </FormControl>
        </Box>
        <div style={{ width: "100%", height: "500px" }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey={ticker}
                stroke="#8884d8"
                dot={false}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
};

export default Diagram;
