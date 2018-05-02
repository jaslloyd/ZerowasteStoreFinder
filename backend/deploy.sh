echo "Starting deployment..."
pm2 stop www
rm -rf /home/jason/ZerowasteStoreFinder/
cd /home/jason/;git clone git@github.com:TheDeployGuy/ZerowasteStoreFinder.git
mkdir /home/jason/ZerowasteStoreFinder/backend/config/
cp database.js /home/jason/ZerowasteStoreFinder/backend/config/database.js
cd /home/jason/ZerowasteStoreFinder/backend;npm install
pm2 start /home/jason/ZerowasteStoreFinder/backend/bin/www
pm2 list
echo "Deployment finished"
