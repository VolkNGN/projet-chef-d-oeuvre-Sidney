# HTTP
<VirtualHost *:80>
    ServerName atelierperrier.wouafwouaf.ovh
    ServerAlias www.atelierperrier.wouafwouaf.ovh

    # DocumentRoot /home/projet-chef-d-oeuvre-Sidney

    # <Directory "/home/projet-chef-d-oeuvre-Sidney">
    #     Options Indexes FollowSymLinks
    #     AllowOverride All
    #     Require all granted
    # </Directory>

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    ProxyPreserveHost On
    ProxyRequests Off
    ProxyPass / http://localhost:5424/  
    ProxyPassReverse / http://localhost:5424/
</VirtualHost>

# HTTPS
<VirtualHost *:443>
    ServerName AtelierPerrier.wouafwouaf.ovh
    ServerAlias www.AtelierPerrier.wouafwouaf.ovh

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    ProxyPreserveHost On
    ProxyRequests Off
    ProxyPass / http://localhost:5424/  
    ProxyPassReverse / http://localhost:5424/

    SSLEngine on
    SSLCertificateFile /home/ssl/atelierperrier.wouafwouaf.ovh/certificate.crt
    SSLCertificateKeyFile /home/ssl/atelierperrier.wouafwouaf.ovh/key.key
    SSLCertificateChainFile /home/ssl/atelierperrier.wouafwouaf.ovh/cabundle.crt
</VirtualHost>