const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  uid: state => state.user.uid,
  email: state => state.user.email,
  mobile: state => state.user.mobile,
  introduction: state => state.user.introduction,
  auth_type: state => state.user.auth_type,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  telephoto: state => state.common_config.telephoto,
  company_name: state => state.common_config.company_name,
  product_name: state => state.common_config.product_name,
  company_address: state => state.common_config.company_address,
  company_address_name: state => state.common_config.company_address_name,
  company_copyright: state => state.common_config.company_copyright,
  icp_info: state => state.common_config.icp_info,
  web_site: state => state.common_config.web_site,
};
export default getters
