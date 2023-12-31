const getStrFromParams = (rawParams) => {
  return rawParams
    ? "?" +
        Object.keys(rawParams)
          .map((param) => {
            return `${param}=${rawParams[param]}`;
          })
          .join("&")
    : "";
};

const ServerAPI = ({
  url,
  method,
  urlParams,
  sendObj,
  onDataReceived,
  handleStatus,
  headers,
}) => {
  fetch(url + getStrFromParams(urlParams), {
    method: method,
    headers: headers,
    body: sendObj && JSON.stringify(sendObj),
  }).then((responce) => {
    const promise = responce.json();
    promise
      .then((data) => {
        handleStatus &&
          handleStatus({
            isOk: responce.ok,
            status: responce.status,
            data: data,
          });
        if (responce.ok) {
          onDataReceived && onDataReceived(data);
        }
      })
      .catch((err) => {
        handleStatus &&
          handleStatus({ isOk: responce.ok, status: responce.status });
        console.log(err);
      });
  });
};
//.then(responce => {
//	const data = responce.json()
//	handleStatus && handleStatus(responce.status, responce.json())
//	if (responce.ok) {
//		onDataReceived(data)
//		data.then(() => {
//			return { data: data, status: responce.status }
//		})
//	}
//})

// Example: ServerAPI_GET({ url : '/yor_url', onDataReceived : (data) => { handleData(data) } })
export const ServerAPI_GET = ({
  url,
  urlParams,
  sendObj,
  onDataReceived,
  handleStatus,
  headers,
}) => {
  ServerAPI({
    method: "GET",
    url: url,
    urlParams: urlParams,
    sendObj: sendObj,
    onDataReceived: onDataReceived,
    handleStatus: handleStatus,
    headers: headers,
  });
};

// Example: ServerAPI_POST({ url : '/your_url', sendObj : your_object, onDataReceived : (data) => { handleData(data) } })
export const ServerAPI_POST = ({
  url,
  urlParams,
  sendObj,
  onDataReceived,
  handleStatus,
  headers,
}) => {
  ServerAPI({
    method: "POST",
    url: url,
    urlParams: urlParams,
    sendObj: sendObj,
    onDataReceived: onDataReceived,
    handleStatus: handleStatus,
    headers: headers || { "Content-Type": "application/json; charset=UTF-8" },
  });
};

// Example: ServerAPI_POST({ url : '/your_url' })
export const ServerAPI_DELETE = ({
  url,
  urlParams,
  sendObj,
  onDataReceived,
  handleStatus,
  headers,
}) => {
  ServerAPI({
    method: "DELETE",
    url: url,
    urlParams: urlParams,
    sendObj: sendObj,
    onDataReceived: onDataReceived,
    handleStatus: handleStatus,
    headers: headers,
  });
};

export const URL = "http://localhost:5000/api/v1";