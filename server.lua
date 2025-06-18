-- server.lua

RegisterNUICallback('searchPlayer', function(data, cb)
    local query = data.query

    -- Basic search by ID or name
    local sql = [[
        SELECT id, license, firstname, lastname
        FROM users
        WHERE id = ? OR firstname LIKE ? OR lastname LIKE ?
        LIMIT 20
    ]]

    local wildcard = "%" .. query .. "%"

    exports.oxmysql:query(sql, { tonumber(query), wildcard, wildcard }, function(results)
        cb(results or {})
    end)
end)