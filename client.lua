-- client.lua

local mdtOpen = false

-- Toggle MDT with B
RegisterCommand('togglemdt', function()
    mdtOpen = not mdtOpen
    SetNuiFocus(mdtOpen, mdtOpen)
    SendNUIMessage({ type = mdtOpen and "open" or "close" })
end)

-- Optional: Register key mapping (for B)
RegisterKeyMapping('togglemdt', 'Open MDT', 'keyboard', 'B')

-- Listen for NUI close event from UI
RegisterNUICallback('close', function(_, cb)
    mdtOpen = false
    SetNuiFocus(false, false)
    cb({})
end)