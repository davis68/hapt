/+  *server
/=  tile-js
  /^  octs
  /;  as-octs:mimes:html
  /:  /===/app/hapt/js/tile
  /|  /js/
      /~  ~
  ==
=,  format
|%
+$  move  (pair bone card)
+$  poke
  $%  [%launch-action [@tas path @t]]
      [%helm-hi @t]
  ==
+$  card
  $%  [%poke wire dock poke]
      [%http-response =http-event:http]
      [%connect wire binding:eyre term]
      [%diff %json json]
  ==
--
|_  [bol=bowl:gall ~]
++  this  .
++  bound
  |=  [wir=wire success=? binding=binding:eyre]
  ^-  (quip move _this)
  [~ this]
++  prep
  |=  old=(unit ~)
  ~&  'it built'
  ^-  (quip move _this)
  =/  launcha
    [%launch-action [%hapt /hapttile '/~hapt/js/tile.js']]
  :_  this
  :~
    [ost.bol %connect / [~ /'~hapt'] %hapt]
    [ost.bol %poke /hapt [our.bol %launch] launcha]
  ==
++  peer-hapttile
  |=  pax=path
  ^-  (quip move _this)
  =/  jon=json
    %-  pairs:enjs:format
    :~
      [%status `json`s+'First starting']
    ==
  [[ost.bol %diff %json jon]~ this]
++  send-tile-diff
  |=  jon=json
  ^-  (list move)
  %+  turn  (prey:pubsub:userlib /hapttile bol)
  |=  [=bone ^]
  [bone %diff %json jon]
++  send-status-diff
  |=  msg=tape
  %-  send-tile-diff
  %-  pairs:enjs:format  :~
    [%status `json`s+(crip msg)]
  ==
++  poke-json
  |=  jon=json
  ^-  (quip move _this)
  ~&  'poke-json in hapt called'
  ~&  jon
  =/  json-map    ((om:dejs:format same) jon)
  =/  ship-to-hi  (so:dejs:format (~(got by json-map) %ship))
  ~&  ship-to-hi
  =/  sthu  (need (slaw %p ship-to-hi))
  :_  this
  %+  weld
    (send-status-diff "looking")
  ^-  (list move)
  :~
    :-  ost.bol
    :^  %poke
        /helm/hi/[ship-to-hi]
      [sthu %hood]
    [%helm-hi '']
  ==
++  coup-helm-hi
  |=  [pax=path cop=(unit tang)]
  ~&  ["Coup recieved" pax]
  :_  this
  ?~  cop
    (send-status-diff "successfully found {<pax>}")
  (send-status-diff "failure")
++  poke-handle-http-request
  %-  (require-authorization:app ost.bol move .)
  |=  =inbound-request:eyre
  ^-  (quip move _this)
  =/  request-line  (parse-request-line url.request.inbound-request)
  =/  back-path  (flop site.request-line)
  =/  name=@t
    =/  back-path  (flop site.request-line)
    ?~  back-path
      ''
    i.back-path
  ?~  back-path
    [[ost.bol %http-response not-found:app]~ this]
  ?:  =(name 'tile')
    [[ost.bol %http-response (js-response:app tile-js)]~ this]
  [[ost.bol %http-response not-found:app]~ this]
::
--
