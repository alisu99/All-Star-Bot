
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

@tree.command(guild= discord.Object(id=id_do_servidor), name='alvaro', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é talarico.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='antonio', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é misógino, anafabeto, Manjador de rola e xenofóbico.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='artur', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é preconceituoso, racista e anafabeto.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='brasil', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é corno, tem síndrome de Touret, preconceituoso e corno manso.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='clecio', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é Homofóbico.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='felps', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é o amor do vitor, rs.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='erik', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí morreu, R.I.P.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='felipe', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é o amor do vitor, rs.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='hari', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é horrivel e racista.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='hubeinz', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é sínico, difamador, satanista👹, odeia careca, é xenofóbico e é amigo do vitor.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='ivan', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é machista.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='jhefferson', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é corno.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='leonardo', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é traidor.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='luan', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é somelier de suvaco.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='mateus', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é corno.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='murilo', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é racista, Tiktoker do kwai e 2x traidor, PS: Nem todos te amamos murilo 💔 ( pegador da loira do banheiro).', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='stelson', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é Facista, alcoólatra, necrofolo', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='toin', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é misógino, anafabeto, Manjador de rola e xenofóbico.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name='vitor', description='Descrição da pessoa da maneira mais sincera e confiável possível!')
async def testecmd(interaction: discord.Integration):
    await interaction.response.send_message(f'De acordo com o grupo esse daí é caçador de casadas, brócolisinho e inocente.', ephemeral = False)

@tree.command(guild= discord.Object(id=id_do_servidor), name= 'sortear', description='sorteia os times para uma boa partida de LoL')
async def sortear(interaction: discord.Interaction):
    numero = random.randint(1, 10)
    await interaction.response.send_message(f'Dado número: {numero}', ephemeral= False)



aclient.run("")

