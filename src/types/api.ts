// User in profile response
export interface ApiProfileUser {
  id: string;
}

// Cached data for config
export interface ApiConfigCachedData {
  email: string;
  limit_ip: number;
  total_gb: number;
  connection_url: string;
  subscription_url: string;
}

// Config model
export interface ApiConfig {
  id: string;
  type: string;
  price: number;
  currency: string;
  user_id: string;
  service_user_id: string;
  cached_data: ApiConfigCachedData;
  valid_from_dttm: string; // ISO datetime string
  valid_to_dttm: string; // ISO datetime string
  _updated_dttm: string; // ISO datetime string
}

// Order data
export interface ApiOrderData {
  limit_ip: number;
  total_gb: number;
}

// Order model
export interface ApiOrder {
  id: string;
  status: string;
  user_id: string;
  config_id: string;
  price: number;
  currency: string;
  data: ApiOrderData;
  _updated_dttm: string; // ISO datetime string
}

// Main profile response with user, configs and orders
export interface ApiProfileResponse {
  user: ApiProfileUser;
  configs: ApiConfig[];
  orders: ApiOrder[];
}
