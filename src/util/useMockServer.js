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
}
