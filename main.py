
import discord
from discord import app_commands
import random

id_do_servidor = 294251991067262976

class client(discord.Client):
    def __init__(self):
        super().__init__(intents=discord.Intents.default())
        self.synced = False
        


    async def on_ready(self):
        await self.wait_until_ready()
        if not self.synced:
            await tree.sync(guild= discord.Object(id=id_do_servidor))
            self.synced = True
        print(f'Entramos como {self.user}.')


aclient = client()
tree = app_commands.CommandTree(aclient)

@tree.command(guild= discord.Object(id=id_do_servidor), name='teste', description='Testando Bot')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'Estou funcionando!', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name= 'dado', description='Número de um dado aleatório')
async def dado(interaction: discord.Interaction):
    numero = random.randint(1, 6)
    await interaction.response.send_message(f'Dado número: {numero}', ephemeral= False)


aclient.run("MTE5MzcyMzg1MzI1MjM0MTg0MQ.GisQSd.7XqZymdLiq98x4E-p0AxXH7WWXH7t4h2zIO5a8")

