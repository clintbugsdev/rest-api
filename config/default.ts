export default {
  port: 1337,
  host: "localhost",
  dbUri: "mongodb://localhost:27017/rest-api",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICXAIBAAKBgHvq+1phEDUA2FRNCx4Cl08B/wOSujc4hLoT1OtZFcxc5JJUIuw3
wmCpMRpu5Fs+YDq33zux5S/XN4hD0wJUxiUWxhmFKOx28aIHZkneu9xkxVCIry1Q
ff5kgnRocyGtoQBhiMtks8DhiC+T960nRK2htToC1UAJws2RpIflHzxtAgMBAAEC
gYBQMOnGPCgL1Ocp7s2x9wVJ+MW53zsovyeNb4YLY5Qqszarx0zuRstAWF1ReM/I
iF4nwZPyApaJViI2yYWE7a1novcdi2L92PHg/WbXUtiDOb/YvJjfWs01Y45T8ArI
12buM+WettuKFL0FlxhooCGSWOAdaTN0NkPuJ1RckkcogQJBAPQlV2kr8yrEY5Ac
CWDHLwYGKl1uM1Her0pIOAaTydxXFZG1EwApcbkj4ZmLChzf7C7KP+NcZiWGSBVz
FLq1Ss0CQQCB7z5UpwqfK3CIyKzUwcL/Aa1EkNp83xYFEon+P0O3SUq3LSeO2KQV
w3mTpwzyrqv1GmtrgSX8NhKAJMx0cvghAkEAkNJRrn42iQjjskkfOvwMJbukh7Vl
1cuNGTgLm8Mwu3YgwkSx16e94L+rA+RZBFXDiOHJ0fkuUlX8DlUsV7BQhQJANmen
cKiUwPreXtevzlHnRQE9vJTudxSt0qflkciJoQgWOca1ZpF9ewNjN5jdygurQrCy
Q8xKzGUTsAY4eZXeIQJBAIh8qdIWZonq+U1TYN8lfgu4yjKhZxksq8gFtOdiRluV
pzdYg0KCK0MeIFtLXdIJya8xOvmd0O9ae3R+1+A7dMs=
-----END RSA PRIVATE KEY-----`,
};
