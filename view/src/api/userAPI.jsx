export const fetchUserData = async (d) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/get_temp_data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(d)
  }
  )
  const data = await response.json()
  //console.log(data)
  return data
}

export const fetchDashboardData = async (d) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/get_dashboard_data`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(d)
  }
  )
  const data = await response.json()
  //console.log(data)
  return data
}

export const fetchAllInsightData = async (page, show, d) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/get_all_insight_data/${page}?show=${show}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(d)
  }
  )
  const data = await response.json()
  //console.log(data)
  return data
}
