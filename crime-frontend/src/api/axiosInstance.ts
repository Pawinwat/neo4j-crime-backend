import { GRAPH_API } from "../config";
import axios from 'axios'


const axiosGraph = axios.create({
    baseURL: GRAPH_API,
  });


  export {
    axiosGraph
  }