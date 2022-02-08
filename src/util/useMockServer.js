import createMockServer from "./mockUtil";

const baseUrl = "http://localhost:3000/";
export default function useMockServer() {
  createMockServer(RegExp(baseUrl + "qy/getData" + ".*"), "get", {
    data_object: {
      total_number: 2,
      data_array_10: {
        id_id: "",
        x_number: 2,
        y_number: 2,
        time_time: "yyyy-MM-dd HH:mm:ss",
      },
    },
  });
  createMockServer(RegExp(baseUrl + "log/getData" + ".*"), "get", {
    data_array_10: {
      id_id: "",
      content_cnstring: 30,
      time_time: "yyyy-MM-dd HH:mm:ss",
    },
  });
}
