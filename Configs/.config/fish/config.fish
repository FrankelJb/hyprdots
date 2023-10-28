status --is-login; and begin
  # Login shell initialisation
end

status --is-interactive; and begin
  # Abbreviations
  abbr --add --global -- cat bat
  abbr --add --global -- diff 'delta -s'
  abbr --add --global -- k kubectl
  abbr --add --global -- ka 'kubectl apply -f'
  abbr --add --global -- kd 'kubectl delete'
  abbr --add --global -- l lsd
  abbr --add --global -- less bat
  abbr --add --global -- lll 'lsd -la'
  abbr --add --global -- ls lsd
  abbr --add --global -- pip pip3
  abbr --add --global -- sshk 'kitty +kitten ssh'
  abbr --add --global -- vim nvim
end

starship init fish | source
